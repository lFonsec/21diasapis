package com.apijava.empresas.model_views;

public class Home {
    public String getMensagem(){
        return "API feita em java com spring";
    }

     public String getDocs(){
        return "/api/swagger.json";
    }
}
