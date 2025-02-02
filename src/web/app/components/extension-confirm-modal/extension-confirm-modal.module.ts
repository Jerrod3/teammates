import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortableTableModule } from '../sortable-table/sortable-table.module';
import { TeammatesCommonModule } from '../teammates-common/teammates-common.module';
import { ExtensionConfirmModalComponent } from './extension-confirm-modal.component';

/**
 * Module for confirming deadline extensions.
 */
@NgModule({
  declarations: [
    ExtensionConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeammatesCommonModule,
    SortableTableModule,
  ],
  exports: [
    ExtensionConfirmModalComponent,
  ],
})
export class ExtensionConfirmModalModule { }
