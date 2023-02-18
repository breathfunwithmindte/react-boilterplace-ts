import ReaderState from "../ReaderState";


export default interface ApplicationReaderType extends ReaderState
{
  applicationname: string | null
  applicationlogo: string | null
}