package br.wint.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Setter
@Entity(name = "skill")
public class Skill{

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    @Size(max = 300)
    private String name;

    @Getter
    @Size(max = 150)
    private String description;

    @ManyToOne
    @JoinColumn(name = "userFromSkill_id")
    private User userFromSkill;

    @Override
    public String toString() {
        return "Skill{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
