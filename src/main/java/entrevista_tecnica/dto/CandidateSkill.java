package entrevista_tecnica.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="candidateSkill")//en caso que la tabala sea diferente
public class CandidateSkill {
	
	//ATRIBUTOS
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//busca ultimo valor e incrementa desde id final de db
	private int id;
	
	@ManyToOne
    @JoinColumn(name = "idCandidate")
	Candidate candidate;
	
	@ManyToOne
    @JoinColumn(name = "idSkill")
	Skill skill;
	
	private String notes;
	private float skillValue;
	
	//CONSTRUCTORS
	public CandidateSkill() {
		super();
	}
	
	public CandidateSkill(int id, Candidate candidate, Skill skill, String notes, float skillValue) {
		super();
		this.id = id;
		this.candidate = candidate;
		this.skill = skill;
		this.notes = notes;
		this.skillValue = skillValue;
	}
	
	//GETTERS Y SETTERS
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Candidate getCandidate() {
		return candidate;
	}
	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}
	public Skill getSkill() {
		return skill;
	}
	public void setSkill(Skill skill) {
		this.skill = skill;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public float getSkillValue() {
		return skillValue;
	}
	public void setSkillValue(float skillValue) {
		this.skillValue = skillValue;
	}
	
	
	@Override
	public String toString() {
		return "CandidateSkill [id=" + id + ", candidate=" + candidate + ", skill=" + skill + ", notes=" + notes
				+ ", skillValue=" + skillValue + "]";
	}
}	
