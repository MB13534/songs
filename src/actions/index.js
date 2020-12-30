//action creator
export const selectSong = (song) => {
  //return an action, type is required
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
