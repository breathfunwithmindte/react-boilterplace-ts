import ReaderError from "./ReaderError";
import ReaderElement from "./ReaderElement";
import ApplicationReaderElement from "./types/ApplicationReaderElement";
import UserReaderElement from "./types/UserReaderElement";


/** some complex page state ... but in most case propably useState will be used */

export default interface ReaderReducerState<T extends ReaderElement>
{
  list: T[],
  error: ReaderError | null
}

const ReaderReducerStateDefault: ReaderReducerState<ReaderElement> = { list: [], error: null }
const ApplicationReaderReducerStateDefault: ReaderReducerState<ApplicationReaderElement> = { list: [], error: null }
const UserReaderReducerStateDefault: ReaderReducerState<UserReaderElement> = { list: [], error: null }



export {
  ReaderReducerStateDefault,
  ApplicationReaderReducerStateDefault,
  UserReaderReducerStateDefault
}


