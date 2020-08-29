/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 8/29/2020 at 3:31 PM
 **/
import {TOGGLE_MENU} from '../../constants/actionTypes';

export const toggleMenu = () => (dispatch) => {
    dispatch({
        type: TOGGLE_MENU,
    })
};
