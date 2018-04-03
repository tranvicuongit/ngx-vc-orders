import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

declare const toastr: any;
@Injectable()
export class ToastService {
  constructor() {
  }

  showSuccess(title, content) {
    toastr['success'](content, title);
  }

  showError(content, title) {
    toastr['error'](content, title);
  }

  showWarning(content, title) {
    toastr['warning'](content, title);
  }

  showInfo(content, title) {
    toastr['info'](content, title);
  }
}
