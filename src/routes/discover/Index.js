import React from "react";
import { connect } from "dva";
import styles from './Index.scss';
import {NavLink} from 'dva/router';
import RouterView from '../../router/RouterView';
class Index extends React.PureComponent {
  componentWillMount() {
    console.log(this.props.match.path);
    this.props.getRoutePath(this.props.match.path);
  }
  render() {
    return <div className={styles.discover}>
      <header className={styles.header}>
        <img src="./icon/listen-n.png" alt=""/>
        <label>
          <NavLink to='/main/search'>猜你喜欢 浮生</NavLink>
        </label>
        <img src="./icon/audio-n.png" alt=""/>
      </header>
      <div className={styles.content}>
        <div className={styles.topTab}>
          <NavLink to='/main/discover/recommend'>个性推荐</NavLink>
          <NavLink to='/main/discover/station'>主播电台</NavLink>
        </div>
        <RouterView routes={this.props.routes}></RouterView>
      </div>
    </div>;
  }
}
const mapStateToProps = state => {
  let { routePath } = state.index;
  return {
    routePath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRoutePath: routePath => {
      dispatch({
        type: "index/getRoutePath",
        routePath
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
