import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId:'af0hmh1d',
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:'sk6bsc5zEGCV1YxV2vAGv0SBLrR1TIhn8YYspYKApoU9EBMDg0QikpkUzlHjIU29cTYdqH72ZH5b04O2kkbxS06gF1o64N1QxNxeKfVy0PfVFEL9WttAlHafWT8qZM1eYMzlV4v6WaeF9qKBRF8ef2rCXkl47QY663F7lbeUhwjayTrxDLYF'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
