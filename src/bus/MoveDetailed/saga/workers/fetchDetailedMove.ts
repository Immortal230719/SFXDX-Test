// Tools
import {
  StartFetchingDetailedMove,
  StopFetchingDetailedMove,
  FillDetailedMove,
  setFetchingDetailedMoveError,
  FetchDetailedMoveAsync,
} from '../../actions';

// Types
import { MoveDetailedType } from '../../types';
// Workers
import { makeRequestWithSpinner } from '../../../../workers';

// API
import { api } from '../../../../API';

export function* fetchDetailedMove(
  { payload }: ReturnType<typeof FetchDetailedMoveAsync>,
): Generator {
  const options = {
    fetcher: api.move.fetch,
    fetcherParam: payload,
    startFetching: StartFetchingDetailedMove,
    stopFetching: StopFetchingDetailedMove,
    fill: FillDetailedMove,
    setErrorAction: setFetchingDetailedMoveError,
  };

  yield makeRequestWithSpinner<MoveDetailedType>(options);
}
