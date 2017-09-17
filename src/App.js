import React from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { AuthRoute, UnAuthRoute, Route } from 'routes'
import Layouts from 'components/Layouts'
import Pages from 'components/Pages'
import * as Path from 'routes/path'

export default ({ store, history }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layouts.Base>
        <Switch>
          <UnAuthRoute path={Path.ROOT} component={Pages.SignIn} exact />
          <UnAuthRoute path={Path.SIGN_UP} component={Pages.SignUp} exact />
          <AuthRoute path={Path.AUTHED} component={() => <h1>Authed</h1>} exact />

          <Route path={Path.ERROR_500} component={Pages.Error500} />
          <Route path='*' component={Pages.Error404} />
        </Switch>
      </Layouts.Base>
    </ConnectedRouter>
  </Provider>