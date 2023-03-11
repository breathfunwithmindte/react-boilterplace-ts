import PageError from "../../types/PageError";
import generateID from "../../utils/generateID";



export default interface ReaderError extends PageError 
{
  
}

const ReaderErrorDefault : ReaderError = {
  id: generateID(),
  status: 0,
  message: null,
  severity: null,
  url: null
}

export { ReaderErrorDefault }