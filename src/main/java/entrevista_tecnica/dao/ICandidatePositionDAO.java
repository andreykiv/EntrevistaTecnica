package entrevista_tecnica.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import entrevista_tecnica.dto.CandidatePosition;

public interface ICandidatePositionDAO extends JpaRepository<CandidatePosition, Integer> {

}
