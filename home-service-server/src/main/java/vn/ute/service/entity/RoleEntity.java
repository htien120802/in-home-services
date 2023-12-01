package vn.ute.service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "Role")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoleEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    @Column(unique = true)
    private String roleName;

    @ManyToMany(mappedBy = "roles",fetch = FetchType.EAGER)
    private Set<AccountEntity> accounts = new HashSet<>();

}
