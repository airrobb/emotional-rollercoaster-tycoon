import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect
} from "react";
import styled from "styled-components";

const FlyoutContainer = styled.div`
  position: relative;
`;

const POSITIONS = {
  top: `
    bottom: 100%;
  `,
  bottom: `
    bottom: 0;
  `
};

const getPosition = ({ position }) => POSITIONS[position];

const FlyoutList = styled.ul`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  margin: 0;
  padding: 0;
  min-width: 20rem;
  padding: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 4px 4px 10px 0px,
    rgb(223, 224, 227) 1px 1px 0px 1px inset,
    rgb(136, 140, 143) -1px -1px 0px 1px inset;
  background-color: rgb(206, 208, 207);

  list-style: none;
  position: absolute;
  left: 0;
  ${getPosition}
`;

const FlyoutListItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    color: rgb(255, 255, 255);
    background: rgb(0, 0, 128);
  }
`;

function FlyoutMenu(props) {
  const { component, options, position } = props;
  const [expanded, setExpanded] = useState(false);
  const parent = useRef();

  const onClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);
  const Component = useMemo(() => {
    return React.cloneElement(component, {
      ...component.props,
      onClick,
      active: expanded
    });
  }, [component, onClick, expanded]);

  const handleGeneralClick = useCallback(
    e => {
      if (!parent.current.contains(e.target)) {
        setExpanded(false);
      }
    },
    [parent, setExpanded]
  );

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleGeneralClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleGeneralClick);
    };
  }, [handleGeneralClick]);
  return (
    <FlyoutContainer>
      {Component}
      <FlyoutList ref={parent} expanded={expanded} position={position}>
        {options.map(({ text, onClick }) => {
          return (
            <FlyoutListItem key={text} onClick={onClick}>
              {text}
            </FlyoutListItem>
          );
        })}
      </FlyoutList>
    </FlyoutContainer>
  );
}

export default FlyoutMenu;
