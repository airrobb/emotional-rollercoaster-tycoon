import { useMemo } from "react";

export default function useActions(dispatch, actions) {
  const boundActions = useMemo(() => {
    const actionMap = {};

    Object.keys(actions).forEach(
      action => (actionMap[action] = actions[action](dispatch))
    );

    return actionMap;
  }, [dispatch, actions]);

  return boundActions;
}
