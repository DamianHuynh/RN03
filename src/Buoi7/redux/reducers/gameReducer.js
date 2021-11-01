import {paper, rock, scissor} from '../../images';

const initState = {
  playerSelect: {id: 'scissor', image: scissor},
  computerSelect: {id: 'rock', image: rock},
  listSelect: [
    {id: 'scissor', image: scissor},
    {id: 'rock', image: rock},
    {id: 'paper', image: paper},
  ],
  scores: 0,
  times: 9,
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default gameReducer;
