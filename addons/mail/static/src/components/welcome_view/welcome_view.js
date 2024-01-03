/** @odoo-module **/

import { registerMessagingComponent } from '@mail/utils/messaging_component';
import { useRefToModel } from '@mail/component_hooks/use_ref_to_model/use_ref_to_model';
import { useUpdateToModel } from '@mail/component_hooks/use_update_to_model/use_update_to_model';

import { _t } from "@web/core/l10n/translation";
import { sprintf } from "@web/core/utils/strings";

const { Component } = owl;

export class WelcomeView extends Component {

    /**
     * @override
     */
    setup() {
        super.setup();
        useRefToModel({ fieldName: 'guestNameInputRef', modelName: 'WelcomeView', refName: 'guestNameInput' });
        useUpdateToModel({ methodName: 'onComponentUpdate', modelName: 'WelcomeView' });
    }

    /**
     * @returns {WelcomeView}
     */
    get welcomeView() {
        return this.messaging && this.messaging.models['WelcomeView'].get(this.props.localId);
    }

    get loggedInAsText() {
        return sprintf(_t("Logged in as %s"), this.messaging.currentUser.nameOrDisplayName);
    }
}

Object.assign(WelcomeView, {
    props: { localId: String },
    template: 'mail.WelcomeView',
});

registerMessagingComponent(WelcomeView);
