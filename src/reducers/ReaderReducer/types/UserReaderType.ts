import ReaderState from "../ReaderState";


export default interface UserReaderType extends ReaderState
{
  username: string | null
  email: string | null
}