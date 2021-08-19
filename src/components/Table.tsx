import styled from 'styled-components';
import { LogDto } from '../utils/data/types';

type LogProps = {
  logs: LogDto[];
};

export const Table = ({ logs }: LogProps) => {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <th>User</th>
          <th>Message</th>
          <th>Subreddit</th>
          <th>Post</th>
          <th>Time</th>
        </tr>
        {logs.map((log) => (
          <tr key={log._id}>
            <td>
              <a href={`https://reddit.com/u/${log.username}/`}>
                {log.username}
              </a>
            </td>
            <td>{log.message}</td>
            <td>{log.subreddit}</td>
            <td>
              <a
                href={`https://reddit.com/r/${log.subreddit}/comments/${log.subId}`}
              >
                Here
              </a>
            </td>
            <td>{log.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
const StyledTable = styled.table`
  a {
    text-decoration: none;
    color: #0e48e9;
    transition: all 0.2s;
  }

  a:hover {
    color: #0ea4e9;
  }
`;
