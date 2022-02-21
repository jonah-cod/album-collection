import React from "react";

const Tracklist = ({ tracks }) => {
  return (
    <>
      {tracks?<table>
        <tbody>
          <tr className="table-head">
            <th>#</th>
            <th>Title</th>
            <th>Length</th>
          </tr>

          {Array.isArray(tracks) ? (
            tracks.map((track, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{track.name}</td>
                <td>{Math.fround(track.duration/60).toFixed(2)}</td>
              </tr>
            ))
          ) : <tr>
                <td>1</td>
                <td>{tracks.name}</td>
                <td>{Math.fround(tracks.duration/60).toFixed(2)}</td>
              </tr>
                  
          }
        </tbody>
      </table>: "no tracks"}
    </>
  );
};

export default Tracklist;
