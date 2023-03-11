import ReaderElement from "../ReaderElement";


export default interface UserReaderElement extends ReaderElement
{
  username: string | null
  email: string | null
}