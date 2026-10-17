// All the TypeScript types we share accross the app live in this one file.
// A "type" describe the shape of an object: which keys it has and what kind of datatype each key holds.

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
