package entrevista_tecnica.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import entrevista_tecnica.dto.Positions;


public interface IPositions extends JpaRepository<Positions, Integer>{
    
}
