import { RouterModule, Routes } from '@angular/router';
import { paths } from './paths';
import { WithSidebarLayoutComponent } from '../layouts/with-sidebar-layout/with-sidebar-layout.component';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { FullLayoutComponent } from '../layouts/full-layout/full-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { OpenWalletComponent } from './open-wallet/open-wallet.component';
import { RestoreWalletComponent } from './restore-wallet/restore-wallet.component';
import { SeedPhraseComponent } from './seed-phrase/seed-phrase.component';
import { AssignAliasComponent } from './assign-alias/assign-alias.component';
import { EditAliasComponent } from './edit-alias/edit-alias.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ContactSendComponent } from './contact-send/contact-send.component';
import { DeeplinkComponent } from './deeplink/deeplink.component';
import { NgModule } from '@angular/core';
import { ExportImportComponent } from './export-import/export-import.component';
import { TransferAliasComponent } from './transfer-alias/transfer-alias.component';

const routes: Routes = [
  {
    path: paths.addWallet,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: AddWalletComponent,
      },
    ],
  },
  {
    path: paths.details,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: WalletDetailsComponent,
      },
    ],
  },
  {
    path: paths.login,
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  {
    path: paths.create,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: CreateWalletComponent,
      },
    ],
  },
  {
    path: paths.open,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: OpenWalletComponent,
      },
    ],
  },
  {
    path: paths.restore,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: RestoreWalletComponent,
      },
    ],
  },
  {
    path: paths.seedPhrase,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: SeedPhraseComponent,
      },
    ],
  },
  {
    path: paths.assignAlias,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: AssignAliasComponent,
      },
    ],
  },
  {
    path: paths.editAlias,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: EditAliasComponent,
      },
    ],
  },
  {
    path: paths.transferAlias,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: TransferAliasComponent,
      },
    ],
  },
  {
    path: paths.settings,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: SettingsComponent,
      },
    ],
  },
  {
    path: paths.contacts,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: ContactsComponent,
      },
    ],
  },
  {
    path: paths.addContacts,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: AddContactsComponent,
      },
    ],
  },
  {
    path: `${paths.editContacts}/:id`,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: AddContactsComponent,
      },
    ],
  },
  {
    path: `${paths.contactSend}/:id`,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: ContactSendComponent,
      },
    ],
  },
  {
    path: paths.import,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: ExportImportComponent,
      },
    ],
  },
  {
    path: paths.deeplink,
    component: WithSidebarLayoutComponent,
    children: [
      {
        path: '',
        component: DeeplinkComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: paths.addWallet,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}