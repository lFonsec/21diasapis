package com.apijava.empresas.repositorio;

import org.springframework.data.repository.CrudRepository;

import com.apijava.empresas.models.Empresa;

public interface EmpresaRep extends CrudRepository<Empresa, Integer> {

    
}
