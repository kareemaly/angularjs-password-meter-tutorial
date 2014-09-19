angular.module('passwordApp')

	.controller('PasswordCtrl', function($scope, Password) {

		$scope.$watch('user.password', function(pass) {

			$scope.passwordStrength = Password.getStrength(pass);

			if($scope.isPasswordWeak()) {

				$scope.form.password.$setValidity('strength', false);

			} else {

				$scope.form.password.$setValidity('strength', true);
			}
		});

		$scope.isPasswordWeak = function() {

			return $scope.passwordStrength < 40;
		}

		$scope.isPasswordOk = function() {

			return $scope.passwordStrength >= 40 && $scope.passwordStrength <= 70;
		}

		$scope.isPasswordStrong = function() {

			return $scope.passwordStrength > 70;
		}

		$scope.isInputValid = function(input) {

			return input.$dirty && input.$valid;
		}

		$scope.isInputInvalid = function(input) {
			return input.$dirty && input.$invalid;
		}

	});