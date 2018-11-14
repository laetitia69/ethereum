import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MnemonicComponent} from './wallet/containers/mnemonic/mnemonic.component';
import {TransactionComponent} from './wallet/containers/transaction/transaction.component';
import {VerificationComponent} from './wallet/containers/verification/verification.component';
import {WalletComponent} from './wallet/containers/wallet/wallet.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
