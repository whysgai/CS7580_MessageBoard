import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "../redux/store";

const customRender = (ui, initialState = {}) => {
    const mockStore = createStore(rootReducer, initialState);
    const Wrapper = ({children}) => {
        return  (
            <Provider store={mockStore}>
                {children}
            </Provider>
        )
    }

    return render(ui, {wrapper: Wrapper})
}

export * from "@testing-library/react";
export {customRender as render}