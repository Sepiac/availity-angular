import ngModule from '../module';
import templateUrl from './upload-progress-bar.html';
import $ from 'jquery';

ngModule.directive('avUploadProgressBar', () => ({
  restrict: 'E',
  scope: {
    upload: '=',
    errorcallback: '='
  },
  templateUrl,
  link(scope) {
    scope.focusInput = function() {
      setTimeout( function() {
        const input = document.querySelector('.pwRequired .modal-body input');
        if (input) {
          input.focus();
        }
      }, 500);
    };

    scope.verifyPassword = function() {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      scope.upload.sendPassword(scope.upload.password);
    };
    scope.percentage = 0;

    const update = () => {
      scope.error = false;
      scope.percentage = scope.upload.percentage;
    };

    const error = () => {
      scope.error = true;
      return scope.errorcallback(scope.upload);
    };

    const success = () => {
      scope.error = false;
      scope.percentage = 100;
    };

    scope.upload.onProgress.push(() => scope.$applyAsync(update));
    scope.upload.onSuccess.push(() => scope.$applyAsync(success));
    scope.upload.onError.push(() => scope.$applyAsync(error));
  }
}));