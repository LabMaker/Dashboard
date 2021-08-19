import styled from 'styled-components';

type TagInputProps = {
  message: string;
  items: string[];
  onChange: Function;
  type?: string;
};

export const TagInputBox = ({ message, onChange, items }: TagInputProps) => {
  const handleKeyDown = (event: any) => {
    const value = event.target.value;

    if (event.key === 'Enter' && value) {
      if (items.find((tag) => tag.toLowerCase() === value.toLowerCase()))
        return;

      onChange([...items, value]);
      event.target.value = '';
    } else if (event.key === 'Backspace' && !value) {
      removeTag(event, items.length - 1);
    }
  };

  const removeTag = (event: any, index: number) => {
    const tagsArray = [...items];

    tagsArray.splice(index, 1);
    onChange(tagsArray);
  };

  return (
    <div className="inputBox">
      <StyledSpan>{message}</StyledSpan>
      <InputTag>
        <ul className="tags">
          {items.map((tag, i) => {
            return (
              <li className="tags-li">
                {tag} <button onClick={(e) => removeTag(e, i)}> x </button>
              </li>
            );
          })}
        </ul>
        <input type="text" onKeyDown={handleKeyDown} />
      </InputTag>
    </div>
  );
};

const StyledSpan = styled.span`
  padding-right: 5px;
  margin-left: 2px;
`;

const InputTag = styled.div`
  display: flex;
  background: #141617;
  border: 2px solid #1f1f1f;
  border-radius: 5px;

  padding: 5px 5px 0px;

  span {
    padding-right: 5px;
  }

  ul {
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    background: #101010;
    align-items: center;
    display: flex;
    margin-right: 5px;
    margin-bottom: 5px;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 13px;
  }

  button {
    align-items: center;
    font-size: 12px;
    height: 15px;
    width: 15px;
    margin-left: 5px;
    justify-content: 0;
    display: inline-flex;
    border: none;
    background: #030303;
    color: white;
    border-radius: 50%;
    padding-left: 4px;
    padding-bottom: 1px;
    font-family: 'Lexend Deca';

    :hover {
      color: #e31919;
      cursor: pointer;
    }
  }

  input {
    align-items: center;
    justify-content: center;
    border: 2px solid #101010;
    color: white;
    font-family: 'Lexend Deca';
    width: 100%;
    height: 30px;
    background: #141617;
    border-radius: 5px;
    transition: 340ms;
    :focus {
      background: #1f1f1f;
      border: 2px solid #292929;
      outline: 0;
      transition: 340ms;
    }
  }
`;