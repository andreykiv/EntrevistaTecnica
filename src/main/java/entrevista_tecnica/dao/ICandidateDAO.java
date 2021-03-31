package entrevista_tecnica.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import entrevista_tecnica.dto.Candidate;

public interface ICandidateDAO extends JpaRepository<Candidate, Integer>{
	public List<Candidate> findByusername(String username);
}
