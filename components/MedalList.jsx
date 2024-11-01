import React from 'react'

const MedalList = (props) => {
    return (
        <>{props.medals.map((entry, index) => (
            <tr key={index}>
                <td>{entry.country}</td>
                <td>{entry.gold}</td>
                <td>{entry.silver}</td>
                <td>{entry.bronze}</td>
                <td><button onClick={() => props.handleDelete(index)}>삭제</button></td>
            </tr>
        ))}
        </>
    )
}

export default MedalList