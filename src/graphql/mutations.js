/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBundle = /* GraphQL */ `
  mutation CreateBundle(
    $input: CreateBundleInput!
    $condition: ModelBundleConditionInput
  ) {
    createBundle(input: $input, condition: $condition) {
      id
      name
      size
      cost
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBundle = /* GraphQL */ `
  mutation UpdateBundle(
    $input: UpdateBundleInput!
    $condition: ModelBundleConditionInput
  ) {
    updateBundle(input: $input, condition: $condition) {
      id
      name
      size
      cost
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBundle = /* GraphQL */ `
  mutation DeleteBundle(
    $input: DeleteBundleInput!
    $condition: ModelBundleConditionInput
  ) {
    deleteBundle(input: $input, condition: $condition) {
      id
      name
      size
      cost
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
