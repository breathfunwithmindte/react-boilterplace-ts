import ReaderElement from "../ReaderElement";


export default interface IncidentReaderElement extends ReaderElement
{
  title: string | null
  type: string | null
  requester: string | null
  assign_to: string | null
}