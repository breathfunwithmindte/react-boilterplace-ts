import ReaderElement from "../ReaderElement";


export default interface ApplicationReaderElement extends ReaderElement
{
  applicationname: string | null
  applicationlogo: string | null
}