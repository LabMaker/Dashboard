import React from "react";
import styled from "styled-components";

type PageProps = {
  title: String;
  subtitle: String;
};

export const PageHeader = (props: PageProps) => {
  return (
    <PageHeaderStyle>
      <div>
        <h2>
          {props.title} <span>{props.subtitle}</span>
          CrimsonBot Reddit Settings <span>/u/CrismonUser</span>
        </h2>
      </div>
    </PageHeaderStyle>
  );
};

const PageHeaderStyle = styled.header`
  box-sizing: border-box;
  box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  position: fixed;
  margin-left: 85px;
  width: calc(100% - 85px);
  z-index: 10;
  height: 85px;
  justify-content: center;
  h2 {
    font-family: "Lexend Deca";
  }
  span {
    display: flex;
    text-align: center;
    vertical-align: center;
    justify-content: center;
    font-weight: normal;
    font-size: 15px;
    padding-left: 5px;
  }
`;
