package br.wint.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity(name = "skill")
public class Skill{

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    @Setter
    @Size(max = 300)
    private String name;

    @Getter
    @Setter
    @Size(max = 150)
    private String description;

    @Setter
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
