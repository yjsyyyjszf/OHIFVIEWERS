import { connect } from 'react-redux';
import CornerstoneViewport from 'react-cornerstone-viewport';
import OHIF from 'ohif-core'

const { setViewportActive } = OHIF.redux.actions;

const mapStateToProps = state => {
    return {
        activeViewportIndex: state.viewports.activeViewportIndex,
        activeTool: state.tools.buttons.find(tool => tool.active === true).command
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setViewportActive: viewportIndex => {
            console.log(`setViewportActive: ${viewportIndex}`);
            dispatch(setViewportActive(viewportIndex))
        }
    };
};

const ConnectedCornerstoneViewport = connect(
    mapStateToProps,
    mapDispatchToProps
)(CornerstoneViewport);

export default ConnectedCornerstoneViewport;