import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Amplify, Storage } from 'aws-amplify';
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
/* import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations"; */
import { listBundles } from "./graphql/queries";
import {
  createBundle as createBundleMutation,
  deleteBundle as deleteBundleMutation,
} from "./graphql/mutations";
import {
  EllabComponent2,
  EllabComponent2Collection,
} from './ui-components';

/* const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]); */

const App = ({ signOut }) => {
  const [bundles, setBundles] = useState([]);

  /*   useEffect(() => {
      fetchNotes();
    }, []); */

  useEffect(() => {
    fetchBundles();
  }, []);

  //fetchNotes with image
  /*   async function fetchNotes() {
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
    } */

  //fetchBundles #1
  /*   async function fetchBundles() {
      const apiData = await API.graphql({ query: listBundles });
      const bundlesFromAPI = apiData.data.listBundles.items;
      setBundles(bundlesFromAPI);
    } */

  //fetchBundles #2 with image
  async function fetchBundles() {
    const apiData = await API.graphql({ query: listBundles });
    const bundlesFromAPI = apiData.data.listBundles.items;
    await Promise.all(
      bundlesFromAPI.map(async (bundle) => {
        if (bundle.image) {
          const url = await Storage.get(bundle.name);
          bundle.image = url;
        }
        return bundle;
      })
    );
    setBundles(bundlesFromAPI);
  }

  //createNote with image
  /*   async function createNote(event) {
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
    } */

  //createBundle #1
  /*   async function createBundle(event) {
      event.preventDefault();
      const form = new FormData(event.target);
      const data = {
        name: form.get("name"),
        size: form.get("size"),
        //cost
      };
      await API.graphql({
        query: createBundleMutation,
        variables: { input: data },
      });
      fetchBundles();
      event.target.reset();
    } */

  //createBundle #2 with image
  async function createBundle(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      size: form.get("size"),
      cost: form.get("cost"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createBundleMutation,
      variables: { input: data },
    });
    fetchBundles();
    event.target.reset();
  }

  //deleteNote with image
  /*   async function deleteNote({ id, name }) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
      await Storage.remove(name);
      await API.graphql({
        query: deleteNoteMutation,
        variables: { input: { id } },
      });
    } */

  //deleteBundle #1
  /*   async function deleteBundle({ id }) {
      const newBundles = bundles.filter((bundle) => bundle.id !== id);
      setBundles(newBundles);
      await API.graphql({
        query: deleteBundleMutation,
        variables: { input: { id } },
      });
    } */

  //deleteBundle #2 with image
  async function deleteBundle({ id, name }) {
    const newBundles = bundles.filter((bundle) => bundle.id !== id);
    setBundles(newBundles);
    await Storage.remove(name);
    await API.graphql({
      query: deleteBundleMutation,
      variables: { input: { id } },
    });
  }

  //return block with Notes
  /*   return (
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
  }; */

  //return block with Bundles
  return (
    <View className="App">
      <Heading level={1}>My Bundles App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createBundle}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Bundle Name"
            label="Bundle Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="size"
            placeholder="Bundle Size"
            label="Bundle Size"
            labelHidden
            variation="quiet"
          />
          <TextField
            name="cost"
            placeholder="Bundle Cost"
            label="Bundle Cost"
            labelHidden
            variation="quiet"
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create Bundle
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Bundles</Heading>
      <View margin="3rem 0">
        {bundles.map((bundle) => (
          <Flex
            key={bundle.id || bundle.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {bundle.name}
            </Text>
            <Text as="span">{bundle.size}</Text>
            <Text as="span">{bundle.cost}</Text>
            {bundle.image && (
              <Image
                src={bundle.image}
                alt={`visual aid for ${bundles.name}`}
                style={{ width: 400 }}
              />
            )}
            <Button variation="link" onClick={() => deleteBundle(bundle)}>
              Delete Bundle
            </Button>
          </Flex>
        ))}
        <Heading level={3}>Component</Heading>
        <View margin="3rem 0">
          <EllabComponent2Collection />
        </View>
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);