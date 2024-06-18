import { IState } from "../hooks/use-store";
import { EActionType, IAction } from "./actions";
import { initialState } from "./initial-state";

const selectedGradientThemeStyles: any = {    
  light: "from-primary-yellow to-white-800",  
  dark: "from-zinc-900 to-zinc-400",
  "": "from-zinc-900 to-zinc-400",
  null: "from-zinc-900 to-zinc-400",
};

const selectedBackgroundThemeStyles: any = {
  light: "bg-yellow-600",  
  dark: "bg-zinc-900",
  "": "bg-zinc-900",
  null: "bg-zinc-900",
};

const selectedTextThemeStyles: any = {
  light: "text-zinc-900",
  green: "text-zinc-100",
  blue: "text-zinc-100",
  purple: "text-zinc-100",
  red: "text-zinc-900",
  yellow: "text-zinc-900",
  pink: "text-zinc-900",
  dark: "text-zinc-100",
  "": "text-zinc-100",
  null: "text-zinc-100",
};

export const reducer = (state: IState, { type, payload }: IAction) => {
  switch (type) {
    case EActionType.SET_LOADING:
      return {
        ...initialState,
        ...state,
        loading: payload.loading,
      };
    case EActionType.SET_PEOPLE:
      return {
        ...initialState,
        ...state,
        people: payload.people
      };
    case EActionType.SET_THEME:
      return {
        ...initialState,
        ...state,
        theme: {
          type: payload.theme.type,
          styles: {
            gradient:
              selectedGradientThemeStyles[payload.theme.type] ?? "bg-zinc-900",
            background:
              selectedBackgroundThemeStyles[payload.theme.type] ??
              "bg-zinc-900",
            text:
              selectedTextThemeStyles[payload.theme.type] ?? "text-zinc-100",
          },
        },
      };
  }
};
