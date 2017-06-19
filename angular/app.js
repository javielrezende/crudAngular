/**
 * Created by Róger Rezende on 14/06/2017.
 */

var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoCliente = {};
   $scope.clienteSelecionado = {};

   $scope.clientes = [
       {nome: "Romário Ratto", telefone: 53991000000, email: "rr@gmail.com"},
       {nome: "Celia Hanna", telefone: 53999111111, email: "ch@gmail.com"},
       {nome: "Pedro Prietsh", telefone: 53991222222, email: "pp@gmail.com"},
   ];
   
   $scope.salvar = function () {
       $scope.clientes.push($scope.novoCliente);
       $scope.novoCliente = {};
   };
   
   $scope.selecionaCliente = function (cliente) {
        $scope.clienteSelecionado = cliente;
   };

   $scope.alterarCliente = function () {
       
   };

   $scope.excluirCliente = function(){
        $scope.clientes.splice($scope.clientes.indexOf($scope.clienteSelecionado), 1);
   };
   
});