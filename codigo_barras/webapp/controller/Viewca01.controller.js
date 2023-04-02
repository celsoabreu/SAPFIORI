sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/json/JSONModel" 
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library, JSONModel) {
        "use strict";

        var urlObject = library.URLHelper;

        return Controller.extend("consultaprodutos.controller.Main", {
            onInit: function () { //onInit equivale a INITIALIZATION no ABAP
              let produto = {};
              let productModel = new JSONModel(produto);
              let view = this.getView();
              view.setModel(productModel, "ModeloProduto");
              // this no javascript = ME-> no ABAP
            },
            onClickImage: function(oEvent){
                urlObject.redirect(oEvent.getSource().getSrc(), true );
            },

            onPressBuscar: function(){
                let input;
                input = this.byId("inpBusca");
                let valor = input.getValue();
                // alert(valor);

                let parameters = {
                    url : "https://world.openfoodfacts.org/api/v2/product/" + valor,
                    method : "GET",
                    async : true,
                    crossDomain : true
                };
                // promise = quando uma função retorna como parametro de exportação
                // outra função
                $.ajax(parameters).done(function(response){
                    debugger
                    let oProdutoModel = this.getView().getModel("ModeloProduto");
                    // Clear
                    oProdutoModel.setData({});
                    oProdutoModel.refresh();
                    oProdutoModel.setData(response);
                    oProdutoModel.refresh();
                }.bind(this) ) // sucesso
                .fail(function(){
                    debugger
                }); //exception

                //variavel tipo texto - com aspas
                let material = "Agua Mineral Natural";
                //variavel de tipo numerico inteiro
                let peso = 500;
                let uom = "ml";
                //variavel de tipo numerico com decimais
                let qtdsodio = 15.66;
                //variavel booleano = abap_bool
                let conteudoliquido = true;

                //tabela interna no javascript - array
                let composicao = ["bicarbonato", "magnesio","sulfato","brometoo"];
                //estrutura - tipo com varias propriedades - ou também chamado de objeto
                let produto = {
                    descricao : "Neston",
                    marca : "Nestle",
                    peso : 500,
                    uom : "g"
                }
            }
        });
    });
Footer
© 2023 GitHub, Inc.