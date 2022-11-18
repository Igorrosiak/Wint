package br.wint.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Setter
@Entity(name = "professional_experience")
public class ProfessionalExperience {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    private String company;

    @Getter
    private String role;

    @Getter
    private String place;

    @Getter
    private Date data;

    @Getter
    private String tag;

    @Getter
    private String description;

    @ManyToOne
    @JoinColumn(name = "userExperiences_id")
    private User userExperiences;

    @Override
    public String toString() {
        return "ProfessionalExperience{" +
                "id=" + id +
                ", company='" + company + '\'' +
                ", role='" + role + '\'' +
                ", place='" + place + '\'' +
                ", data=" + data +
                ", tag='" + tag + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
