import ReaderError from "./ReaderError";
import ReaderState from "./ReaderState";
import ApplicationReaderState from "./types/ApplicationReaderType";
import UserReaderState from "./types/UserReaderType";


/** some complex page state ... but in most case propably useState will be used */

export default interface ReaderReducerState<T extends ReaderState>
{
  list: T[],
  error: ReaderError | null
}

const ReaderReducerStateDefault: ReaderReducerState<ReaderState> = { list: [], error: null }
const ApplicationReaderReducerStateDefault: ReaderReducerState<ApplicationReaderState> = { list: [], error: null }
const UserReaderReducerStateDefault: ReaderReducerState<UserReaderState> = { list: [], error: null }



export {
  ReaderReducerStateDefault,
  ApplicationReaderReducerStateDefault,
  UserReaderReducerStateDefault
}


