import { MOUSE_MOVE, MOUSE_UP, MOUSE_DOWN, INIT } from './ActionTypes';
import { actionCreators as nodeActions } from 'features/nodes/actions';

export function updateLayoutProperty(dispatch, getState, id) {
	const layout = (getState()[id].boxes || []).map((row) => {
		return row.map((box) => {
			return box.id
		});
	});

	dispatch(nodeActions.updateNode("layout", layout));
}

export function initLayout(id, boxes) {
	return function (dispatch, getState) {
		dispatch({
			type: INIT,
			id,
			boxes,
		})

		updateLayoutProperty(dispatch, getState, id);
	}
}


export function mouseMove(id, x, y) {
	return {
		type: MOUSE_MOVE,
		x,
		y,
		id,
	}
}

export function mouseDown(id, box, w, h) {
	return {
		type: MOUSE_DOWN,
		box,
		id,
		w,
		h
	}
}

export function onDragEnd(id) {
	return function (dispatch, getState) {

		dispatch({
			type: MOUSE_UP,
			id
		});

		updateLayoutProperty(dispatch, getState, id);
	}
}

export function mouseUp(id) {
	return function (dispatch, getState) {

		dispatch({
			type: MOUSE_UP,
			id
		});


		updateLayoutProperty(dispatch, getState, id);
	}
}