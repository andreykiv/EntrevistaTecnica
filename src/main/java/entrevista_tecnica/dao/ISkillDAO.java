package entrevista_tecnica.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import entrevista_tecnica.dto.Skill;

public interface ISkillDAO extends JpaRepository<Skill, Integer> {

}
