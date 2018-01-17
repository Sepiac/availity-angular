import ngModule from '../module';
import templateUrl from './upload-progress-bar.html';

ngModule.directive('avUploadProgressBar', () => ({
  restrict: 'E',
  scope: {
    upload: '='
  },
  templateUrl,
  link(scope) {
    scope.percentage = 0;
    scope.completed = false;

    const update = () => {
      scope.percentage = scope.upload.percentage;
    };

    const error = () => {
      scope.error = true;
    };

    const success = () => {
      scope.percentage = 100;
      scope.completed = true;
    };

    scope.upload.onProgress.push(() => scope.$applyAsync(update));
    scope.upload.onSuccess.push(() => scope.$applyAsync(success));
    scope.upload.onError.push(() => scope.$applyAsync(error));
  }
}));
