/** Build information meta data */
export default interface MetaInterface {
  /** Package name */
  name: string;
  /** Version */
  version: string;
  /** Author information */
  author: {
    name: string;
    email: string;
    url: string;
  };
  /** Build date */
  date: string;
}
