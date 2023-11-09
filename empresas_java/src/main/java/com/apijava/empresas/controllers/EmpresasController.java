package com.apijava.empresas.controllers;


import java.util.List;

import com.apijava.empresas.models.Empresa;
import com.apijava.empresas.repositorio.EmpresaRep;

import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class EmpresasController {
    
    @Autowired
    private EmpresaRep repo;

    @GetMapping("/empresas")
    public List<Empresa> index(){
        List<Empresa> empresas = (List<Empresa>)repo.findAll();
        return empresas;
    }

    @GetMapping("/empresas/{id}")
    public ResponseEntity<Empresa> show(@PathVariable int id){
        if(!repo.existsById(id)){
            return ResponseEntity.status(404).build();
        }
        Empresa empresa = repo.findById(id).get();
        return ResponseEntity.ok(empresa);
    }
    
    @PostMapping("/empresas")
    public Empresa create(@RequestBody Empresa empresa, HttpServletResponse response){
        try{
        repo.save(empresa);
        }
        catch(Exception err){
            
            empresa.setNome(err.getMessage());
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
        return empresa;
    }

     @PutMapping("/empresas/{id}")
    public Empresa create(@PathVariable int id, @RequestBody Empresa empresa){
        return empresa;
    }

     @DeleteMapping("/empresas/{id}")
    public Empresa create(@PathVariable int id){
        return new Empresa();
    }
}
