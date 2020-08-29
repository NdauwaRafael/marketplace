/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 8/29/2020 at 3:33 PM
 **/
import {TOGGLE_MENU} from "../../constants/actionTypes";

const initialState = {
    menuVisible: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                menuVisible: !state.menuVisible
            }
        default :
            return state
    }

}
