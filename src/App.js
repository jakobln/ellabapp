import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
/* import { listPackages } from "./graphql/queries";
import {
  createPackage as createPackageMutation,
  deletePackage as deletePackageMutation,
} from "./graphql/mutations"; */

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

/*   const App = ({ signOut }) => {
    const [packages, setPackages] = useState([]); */

  useEffect(() => {
    fetchNotes();
  }, []);

/*   useEffect(() => {
    fetchPackages();
  }, []); */

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

/*   async function fetchPackages() {
    const apiData = await API.graphql({ query: listPackages });
    const packagesFromAPI = apiData.data.listPackages.items;
    setPackages(packagesFromAPI);
  } */

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

/*   async function createPackage(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      size: form.get("size"),
    };
    await API.graphql({
      query: createPackageMutation,
      variables: { input: data },
    });
    fetchPackages();
    event.target.reset();
  } */

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

/*   async function deletePackage({ id }) {
    const newPackages = packages.filter((package) => package.id !== id);
    setPackages(newPackages);
    await API.graphql({
      query: deletePackageMutation,
      variables: { input: { id } },
    });
  } */

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${notes.name}`}
                style={{ width: 400 }}
              />
            )}
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

/* 
  return (
    <View className="App">
      <Heading level={1}>My Packages App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createPackage}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Package Name"
            label="Package Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="size"
            placeholder="Package Size"
            label="Package Size"
            labelHidden
            variation="quiet"
          />
          <Button type="submit" variation="primary">
            Create Package
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Packages</Heading>
      <View margin="3rem 0">
        {packages.map((package) => (
          <Flex
            key={package.id || package.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {package.name}
            </Text>
            <Text as="span">{package.size}</Text>
            <Button variation="link" onClick={() => deletePackage(package)}>
              Delete package
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}; */

export default withAuthenticator(App);